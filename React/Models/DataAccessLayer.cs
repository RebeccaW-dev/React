using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OnBoardingTask.Models
{
    public class DataAccessLayer
    {
        AdventureWorks2017Context db = new AdventureWorks2017Context();
        public IEnumerable<Customers> GetAllCustomers()
        {
            try
            {
                return db.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record     
        public int AddCustomer(Customers customer)
        {
            try
            {
                db.Add(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar employee    
        public int UpdateCustomer(Customers customer)
        {
            try
            {
                db.Entry(customer).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular employee    
        public Customers GetCustomerData(int id)
        {
            try
            {
                Customers customer = db.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular employee    
        public int DeleteEmployee(int id)
        {
            try
            {
                Customers emp = db.Find(id);
                db.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        internal int AddCustomer(CustomerController.Controllers.CustomerController.Customeri customeri)
        {
            throw new NotImplementedException();
        }

        internal int UpdateCustomer(CustomerController.Controllers.CustomerController.Customeri customeri)
        {
            throw new NotImplementedException();
        }

        internal int DeleteCustomeri(int id)
        {
            throw new NotImplementedException();
        }

        internal CustomerController.Controllers.CustomerController.Customeri GetAllCustomers(int id)
        {
            throw new NotImplementedException();
        }
    }
}
    




        /*//declare connection string
        private string cs = AdventureWorks2017Context.ConnectionString;

        //Return list of all Employees
        public List<Customers> ListAll()
        {
            List<Customers> lst = new List<Customers>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("SelectCustomer", con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataReader rdr = com.ExecuteReader();
                while (rdr.Read())
                {
                    lst.Add(new Customers
                    {
                        Id = Convert.ToInt32(rdr["CustomerId"]),
                        Name = rdr["Name"].ToString(),
                        Address = rdr["Address"].ToString(),

                    });
                }
                return lst;
            }
        }
        //To Add new Customer record     
        public int Add(Customers cus)
        {
            int i;
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("InsertUpdateCustomer", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", cus.Id);
                com.Parameters.AddWithValue("@Name", cus.Name);
                com.Parameters.AddWithValue("@Address", cus.Address);
                i = com.ExecuteNonQuery();
            }
            return i;
        }
        //To Update the records of a particluar customer    
        public int Edit(Customers cus)
        {
            int i;
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("InsertEditCustomer", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", cus.Id);
                com.Parameters.AddWithValue("@Name", cus.Name);
                com.Parameters.AddWithValue("@Address", cus.Address);
                com.Parameters.AddWithValue("@Action", "Edit");
                i = com.ExecuteNonQuery();
            }
            return i;
        }

        //Method for Deleting a customer
        public int Delete(int ID)
        {
            int i;
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("DeleteCustomer", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", ID);
                i = com.ExecuteNonQuery();
            }
            return i;
        }
    }
}*/
      