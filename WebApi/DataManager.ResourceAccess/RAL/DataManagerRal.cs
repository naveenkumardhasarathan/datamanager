using DataManager.BusinessEntities;
using System;
using System.Collections.Generic;
using DataManager.Common;
using Dapper;

namespace DataManager.ResourceAccess
{
    public class DataManagerRal
    {
        string strTableName = string.Empty;
        string strColumnName = string.Empty;
        string strObjectType = string.Empty;
        string strdbschemaquery = "SELECT SCHEMA_NAME(so.SCHEMA_ID) AS 'schema',so.name AS 'TableName'," +
            "Coalesce(sc.name, '--') AS 'ColumnName',sc.is_nullable AS 'id',t.name AS 'DataType',sep.value AS 'Description' ," +
            "sc.column_id,sep.minor_id,sc.object_id,so.type as objtype FROM	sys.objects so INNER JOIN  " +
            "sys.columns sc ON so.object_id = sc.object_id INNER JOIN sys.types t ON sc.user_type_id = t.user_type_id " +
            "LEFT OUTER JOIN sys.extended_properties sep ON sep.major_id = so.object_id AND sep.minor_id = sc.column_id  WHERE 1=1";
          


        public DataManagerRal()
        {
            //string strDbschemaquery = "SELECT SCHEMA_NAME(so.SCHEMA_ID) AS 'schema',so.name AS 'TableName'," +
            //"Coalesce(sc.name, '--') AS 'ColumnName',sc.is_nullable AS 'id',t.name AS 'DataType',sep.value AS 'Description' ," +
            //"sc.column_id,sep.minor_id,sc.object_id,so.type as objtype FROM	sys.objects so INNER JOIN  " +
            //"sys.columns sc ON so.object_id = sc.object_id INNER JOIN sys.types t ON sc.user_type_id = t.user_type_id " +
            //"LEFT OUTER JOIN sys.extended_properties sep ON sep.major_id = so.object_id AND sep.minor_id = sc.column_id " +
            //$"WHERE 1=1 and so.name like '%{strTableName}%' and sc.name like '%{strColumnName}%' AND  so.type in({strObjectType})";
        }
        public List<Table> GetTables()
        {
            var dynParams = new DynamicParameters();
            return Db.Fetch<Table>("select name from sysobjects where type='u' order by [name] asc", dynParams);
        }

        public List<DbSchemaDetails> GetSchemadetails(dbserverdetails serverdetails, dbdetailsrequest dbdetails)
        {
            strTableName = dbdetails.TableName;
            strColumnName = dbdetails.ColumnName;
            strObjectType = "U";
            string strQueryExtension = $" and so.name like '%{strTableName}%' and sc.name like '%{strColumnName}%' AND  so.type in('{strObjectType}')";

            string tmpConnectionString = $"server={serverdetails.dbserver};Initial Catalog={serverdetails.database};uid={serverdetails.userid};pwd={serverdetails.password}";

            var dynParams = new DynamicParameters();
            dynParams.Add("@ColumnName", dbdetails.ColumnName);
            dynParams.Add("@TableName", dbdetails.TableName);
            dynParams.Add("@ViewName", dbdetails.ViewName);
            dynParams.Add("@SPName", dbdetails.StoredProcedure);

            return Db.FetchByConnection<DbSchemaDetails>(tmpConnectionString, strdbschemaquery+ strQueryExtension, dynParams);
        }

        public List<string> GetGetAllDb(dbserverdetails serverdetails)
        {
            string tmpConnectionString = $"server={serverdetails.dbserver};uid={serverdetails.userid};pwd={serverdetails.password}";

            var dynParams = new DynamicParameters();
            return Db.FetchByConnection<string>(tmpConnectionString,"SELECT * from sys.databases order by name", dynParams);
        }
    }
}
