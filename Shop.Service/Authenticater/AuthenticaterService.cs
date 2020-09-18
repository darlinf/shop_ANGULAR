using Microsoft.EntityFrameworkCore;
using shop.Helpers;
using Shop.Data;
using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.Service.Authenticater
{
    public class AuthenticaterService : IAuthenticater
    {
        private DataContext _context;
        public AuthenticaterService(DataContext context)
        {
            _context = context;
        }


        public User Authentication(string Email, string password)
        {
            if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(x => x.Email == Email);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        public User Create(User user, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password in required");
            if (_context.Users.Any(x => x.Email == user.Email))
                throw new AppException("Usename \"" + user.Email + "\" is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public void Update(User customer, int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateAdmin(User admin)
        {
            _context.Entry(admin).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public string GetImagenUser(string Email)
        {
            var user = _context.Users.SingleOrDefault(x => x.Email == Email);
            if (user == null)
                return null;
            return user.Image;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null)
                throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                if (password == null)
                    throw new ArgumentNullException("password");
                if (string.IsNullOrWhiteSpace(password))
                    throw new ArgumentException("Value connot be empty or whitespace only string.", "password");
                if (storedHash.Length != 64)
                    throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
                if (storedSalt.Length != 128)
                    throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }

        public User GetByEmail(string Email)
        {
            return _context.Users.FirstOrDefault(x => x.Email == Email);
        }

        public void Update(User admin)
        {
            throw new NotImplementedException();
        }
    }
}
