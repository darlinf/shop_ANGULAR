using System;
using System.Collections.Generic;
using System.Text;
using Shop.Data.Entities;

namespace Shop.Data.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Phone { get; set; }
        public string Addres { get; set; }
        public string Currency { get; set; }
        public string Website { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public List<Invoice> Invoices { get; set; }
    }
}
