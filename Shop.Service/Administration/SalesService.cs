using Microsoft.EntityFrameworkCore;
using Shop.Data;
using Shop.Data.Entities;
using Shop.Data.Interfas.Administration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.Service.Administration
{
    public class SalesService : ISales
    {
        private DataContext _context;
        public SalesService(DataContext context)
        {
            _context = context;
        }


        public void Create(Invoice NewSales)
        {
           var product = _context.Products.Where(x => x.Id == NewSales.Id).ToList();
    
           // product.ForEach(x => x.Stock)

           NewSales.Id = 0;

            _context.Invoices.Add(NewSales);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Object> GetAll()
        {

            var invoices = from invoice in _context.Invoices
                            from user in _context.Users
                            where invoice.UserId == user.Id
                            select new {
                                invoice.Date,
                                user.Name,
                                invoice.Item,
                                invoice.TotalAmount,
                                invoice.PaymentStatus,
                                invoice.PaymentMethos
                            };

            return invoices;
        }

        public User GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, Invoice EditSales)
        {
            throw new NotImplementedException();
        }
    }
}
