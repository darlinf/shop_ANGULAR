using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Administration
{
    public interface ICustomer
    {
        IEnumerable<User> GetAll();
        void Delete(int id);
    }
}
