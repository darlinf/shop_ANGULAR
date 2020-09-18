
using System.Collections.Generic;

namespace Shop.Data.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Status { get; set; }
        public string Image { get; set; }
        public List<Product> Products { get; set; }
    }
}
