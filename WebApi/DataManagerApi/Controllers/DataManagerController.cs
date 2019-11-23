using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataManager.BusinessEntities;
using DataManager.BusinessLogic;

namespace DataManagerApi.Controllers
{
    public class DataManagerController : ApiController
    {
        [HttpGet]
        [Route("DM/Table")]
        public HttpResponseMessage GetTables()
        {
            var resultData = new DatamanagerBpl().GetTables();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, resultData);
            return response;
        }

        [HttpGet]
        [Route("DM/GetAllServer")]
        public HttpResponseMessage GetAllServer()
        {
            var resultData = new DatamanagerBpl().GetAllServer();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, resultData);
            return response;
        }

        [HttpPost]
        [Route("DM/GetAllDb")]
        public HttpResponseMessage GetAllDb(dbserverdetails serverdetails)
        {
            HttpResponseMessage response = null;
            try
            {
                var resultData = new DatamanagerBpl().GetAllDb(serverdetails);
                response = Request.CreateResponse(HttpStatusCode.OK, resultData);
            }
            catch (Exception ex)
            {
                response = Request.CreateErrorResponse(HttpStatusCode.Forbidden, ex);
            }
            return response;
        }




        [HttpPost]
        [Route("DM/Schema")]
        public HttpResponseMessage GetSchemaDetails(dbschemarequestdetails dbinforequest )
        {
            dbserverdetails serverdetails = dbinforequest.serverdetailsReq;
            dbdetailsrequest dbdetails = dbinforequest.schemadetailsReq;
            HttpResponseMessage response = null;
            try
            {
                var resultData = new DatamanagerBpl().GetSchemadetails(serverdetails, dbdetails);
                response = Request.CreateResponse(HttpStatusCode.OK, resultData);
            }
            catch (Exception ex)
            {
                response = Request.CreateErrorResponse(HttpStatusCode.Forbidden, ex);
            }
            return response;
        }


    }
}
