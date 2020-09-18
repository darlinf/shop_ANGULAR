using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Administration
{
    public interface IProduct
    {
        IEnumerable<Product> GetAll();
        Product GetById(int id);
        void Delete(int id);
        void Create(Product NewProduct);
        void Update(int id, Product EditProduct);
    }
}
