using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class APIException
    {
        public APIException(int statuCode, string message = null, string details = null)
        {
            StatuCode = statuCode;
            Message = message;
            Details = details;
        }
        public int StatuCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}