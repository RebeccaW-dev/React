using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnBoardingTask.Models;

namespace ProductController.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private string cs = "Data Source=lenovolaptop;Initial Catalog=AdventureWorks2017;Integrated Security=True";

        //Return list of all Employees
        public List<Producti> ListAll()
        {
            System.Diagnostics.Debug.WriteLine("##ConString=" + cs);
            List<Producti> lst = new List<Producti>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("select * from Product", con);
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

                        lst.Add(new Producti
                        {
                            id = (int)rdr[0],
                            name = (string)rdr[1],
                            price = (int)rdr[2]
                        });
                    }
                }
                return lst;
            }
        }
        [HttpGet("[action]")]
        public IEnumerable<Producti> Product()

        {
            System.Diagnostics.Debug.WriteLine("##Action start");
            List<Producti> producti = ListAll();
            System.Diagnostics.Debug.WriteLine("##Action start print");
            System.Diagnostics.Debug.WriteLine(producti);
            System.Diagnostics.Debug.WriteLine("##Action end print");
            return producti;
        }


        public class Producti
        {
            public int id { get; set; }
            public string name { get; set; }
            public int price { get; set; }


        }
    }
}