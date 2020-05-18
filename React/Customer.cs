using System;
using System.Collections.Generic;

namespace OnBoardingTask.Models
{
    public partial class Customers
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }


        }
    

    public class Response
    {
        public string Status { get; set; }
        public string Message { get; set; }
    }


}
