using System;
using System.Collections.Generic;
using System.Text;

namespace DataManager.BusinessEntities
{
    public class dbdetailsrequest
    {
        public string TableName { get; set; }
        public string ViewName { get; set; }
        public string StoredProcedure { get; set; }
        public string ColumnName { get; set; }

    }
}
