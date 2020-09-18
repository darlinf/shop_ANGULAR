using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data
{
    public interface IAuthenticater
    {
        User Authentication(string CustomerParam, string password);
        User Create(User customer, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
        void Update (User admin);
        void UpdateAdmin(User admin);
        void Delete(int id);
        string GetImagenUser(string Email);
        User GetByEmail(string Email);

    }
}
