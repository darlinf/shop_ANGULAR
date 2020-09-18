using Microsoft.EntityFrameworkCore;
using Shop.Data;
using Shop.Data.Interfas.Administration;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.Service.Administration
{
    public class CategoryService : ICategory
    {
        private readonly DataContext _context;
        public CategoryService(DataContext context)
        {
            _context = context;
        }
        public void Create(Category NewCategory)
        {
            _context.Add(NewCategory);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var category = _context.Categories.Find(id);
            _context.Remove(category);
            _context.SaveChanges();
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories;
        }
        
        public IEnumerable<Category> GetCategoryAndProduct(){
            return _context.Categories.Include(x => x.Products);
        }

        public Category GetById(int id)
        {
            return _context.Categories.Find(id);
        }

        public void Update(int id, Category EditCategory)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Category> GetCategoryAndProductFilter(int id)
        {
            return _context.Categories.Where(x => x.Id == id).Include(x => x.Products);
        }
    }
}
