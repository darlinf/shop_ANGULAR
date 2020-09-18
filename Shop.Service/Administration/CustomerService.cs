using Shop.Data;
using Shop.Data.Entities;
using Shop.Data.Interfas.Administration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.Service.Administration
{
    public class CustomerService : ICustomer
    {
        private readonly DataContext _context;
        public CustomerService(DataContext context)
        {
            _context = context;
        }
        public void Delete(int id)
        {
            var customer = _context.Users.FirstOrDefault(x => x.Id == id && x.Role==Role.User);
            _context.Remove(customer);
            _context.SaveChanges();
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.Where(x => x.Role == Role.User);
        }
    }
}
