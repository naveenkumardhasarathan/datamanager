using System;
using System.Collections.Generic;
using DataManager.ResourceAccess;
using DataManager.BusinessEntities;
using System.IO;
using System.Linq;

namespace DataManager.BusinessLogic
{
    public class DatamanagerBpl
    {
        public List<Table> GetTables()
        {
            return new DataManagerRal().GetTables();
        }

        public List<DbSchemaDetails> GetSchemadetails(dbserverdetails serverdetails, dbdetailsrequest dbdetails)
        {
            return new DataManagerRal().GetSchemadetails(serverdetails,dbdetails);
        }

        public List<string> GetAllServer()
        {
            return File.ReadLines(AppDomain.CurrentDomain.BaseDirectory + "\\App_Data\\dbserver.txt").ToList();
        }

        public List<string> GetAllDb(dbserverdetails serverdetails)
        {
            return new DataManagerRal().GetGetAllDb(serverdetails);
        }
    }
}
