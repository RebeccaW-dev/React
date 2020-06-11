using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using OnBoardingTask.Models;

namespace SalesController.Controllers
{
    [Route("api/[controller]")]
    public class SalesController : Controller
    {
        private string cs = "Data Source=lenovolaptop;Initial Catalog=AdventureWorks2017;Integrated Security=True";

        //Return a list 
        public List<Salesi> ListAll()
        {
            
            System.Diagnostics.Debug.WriteLine("##ConString=" + cs);
            List<Salesi> lst = new List<Salesi>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("select * from Sales", con);
                System.Diagnostics.Debug.WriteLine("##com");
                com.CommandType = CommandType.Text;
                using (SqlDataReader rdr = com.ExecuteReader())
                {

                    int pos = 0;
                    while (rdr.Read())
                    {
                        System.Diagnostics.Debug.WriteLine("##item=");
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

                        System.Diagnostics.Debug.WriteLine("##rdr=");
                        
                            lst.Add(new Salesi
                            {
                              
                                customer = (string)rdr[0],
                                product = (string)rdr[1],
                                store = (string)rdr[2],
                            });
                        
                    System.Diagnostics.Debug.WriteLine(lst);
                    }
                    return lst;
                  
                }            
            }
        }
        [HttpGet("[action]")]
        public IEnumerable<Salesi> Sales()

        {
            System.Diagnostics.Debug.WriteLine("##Action start");
            List<Salesi> Salesi = ListAll();
            System.Diagnostics.Debug.WriteLine("##Action start print");
            System.Diagnostics.Debug.WriteLine(Salesi);
            System.Diagnostics.Debug.WriteLine("##Action end print");
            return Salesi;
        }
        public class Salesi
        {   
            public int id { get; set; }
            public string customer { get; set; }
            public string product { get; set; }
            public string store { get; set; }
            public string dateSold { get; set; }
            
        }
    }
}