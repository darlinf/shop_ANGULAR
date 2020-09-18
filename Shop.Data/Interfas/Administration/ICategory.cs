using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Administration
{
    public interface ICategory
    {
        IEnumerable<Category> GetAll();
        IEnumerable<Category> GetCategoryAndProduct();
        IEnumerable<Category> GetCategoryAndProductFilter(int id);
        Category GetById(int id);
        void Delete(int id);
        void Create(Category NewCategory);
        void Update(int id, Category EditCategory);

    }
}
