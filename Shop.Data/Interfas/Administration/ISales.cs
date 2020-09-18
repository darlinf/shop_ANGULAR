using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Administration
{
    public interface ISales
    {
        IEnumerable<Object> GetAll();
        User GetById(int id);
        void Delete(int id);
        void Create(Invoice NewSales);
        void Update(int id, Invoice EditSales);
    }
}
