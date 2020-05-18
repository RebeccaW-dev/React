using System;
using System.Collections.Generic;

namespace OnBoardingTask.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        internal int AddProduct(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
