using Microsoft.EntityFrameworkCore;
using Shop.Data.Entities;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options ):base(options) { }
        
        public DbSet<Models.Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
