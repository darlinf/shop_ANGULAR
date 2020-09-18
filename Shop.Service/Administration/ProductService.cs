using Shop.Data;
using Shop.Data.Interfas.Administration;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Service.Administration
{
    public class ProductService : IProduct
    {
        private readonly DataContext _context;
        public ProductService(DataContext context)
        {
            _context = context;
        }

        public void Create(Product NewProduct)
        {
            _context.Add(NewProduct);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var product = _context.Products.Find(id);
            _context.Remove(product);
            _context.SaveChanges();

        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Products;
        }

        public Product GetById(int id)
        {
            return _context.Products.Find(id);
        }

        public void Update(int id, Product EditProduct)
        {
            throw new NotImplementedException();
        }
    }
}
