using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace shop.Models
{
    public class RegisterModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        public string Image { get; set; }
        public string Currency { get; set; }
        public string Phone { get; set; }
        public string Addres { get; set; }
        public string Role { get; set; }
        
        public RegisterModel()
        {
            Role = Shop.Data.Entities.Role.User;
        }
    }
}
