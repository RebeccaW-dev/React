using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnBoardingTask.Models;

namespace CustomerController.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private string cs = "Data Source=lenovolaptop;Initial Catalog=AdventureWorks2017;Integrated Security=True";

        //Return list of all Customers
        public List<Customeri> ListAll()
        {
            System.Diagnostics.Debug.WriteLine("##ConString=" + cs);
            List<Customeri> lst = new List<Customeri>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("select * from Customer", con);
                com.CommandType = CommandType.Text;
                using (SqlDataReader rdr = com.ExecuteReader())
                {

                    int pos = 0;
                    while (rdr.Read())
                    {
                        System.Diagnostics.Debug.WriteLine("##item=" + pos);
                        System.Diagnostics.Debug.WriteLine("##field count " + rdr.FieldCount);

                        /*                        for (int i = 0; i < rdr.FieldCount; i++) // print header
                                                {
                                                    System.Diagnostics.Debug.WriteLine("##rdr=" + rdr[0] );
                                                }*/

                        for (int i = 0; i < rdr.FieldCount; i++) // print items
                        {
                            System.Diagnostics.Debug.WriteLine("##rdr=" + rdr[i]);
                        }
                        pos++;

                        lst.Add(new Customeri
                        {
                            Id = (int)rdr[0],
                            Name = (string)rdr[1],
                            Address = (string)rdr[2]
                        });
                    }
                }
                return lst;
            }
        }
        [HttpGet("[action]")]
        public IEnumerable<Customeri> Customer()

        {
            System.Diagnostics.Debug.WriteLine("##Action start");
            List<Customeri> customeri = ListAll();
            System.Diagnostics.Debug.WriteLine("##Action start print");
            System.Diagnostics.Debug.WriteLine(customeri);
            System.Diagnostics.Debug.WriteLine("##Action end print");
            return customeri;
        }


        public class Customeri
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Address { get; set; }
        }
    }
}
