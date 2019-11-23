using System;
using System.Collections.Generic;
using System.Text;

namespace DataManager.BusinessEntities
{
    public class DbSchemaDetails
    {
        public string TableName { get; set; }
        public string ColumnName { get; set; }
        public string DataType { get; set; }
        public string Description { get; set; }
        public string Size { get; set; }
        public string AllowNulls { get; set; }
        public string Constrains { get; set; }
        public string Isdentity { get; set; }
        public string References { get; set; }
        public string column_id { get; set; }
        public string minor_id { get; set; }
        public string object_id { get; set; }
        public string objtype { get; set; }

    }
}
