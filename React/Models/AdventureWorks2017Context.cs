using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CustomerController;
using System.Collections.Generic;

namespace OnBoardingTask.Models
{
    public partial class AdventureWorks2017Context : DbContext

    {
        public AdventureWorks2017Context()
        {
           // System.Diagnostics.Debug.WriteLine

                             
        }

        public AdventureWorks2017Context(DbContextOptions<AdventureWorks2017Context> options)
            : base(options)
        {
            System.Diagnostics.Debug.WriteLine("CS AdventureWorks2017Context(options)");
        }

        internal IEnumerable<Customers> ToList()
        {
            throw new NotImplementedException();
        }

        public static object ConnectionStrings { get; internal set; }
        public static string ConnectionString { get; internal set; }
        public virtual DbSet<Customers> Customer { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<Stores> Stores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            System.Diagnostics.Debug.WriteLine("CS AdventureWorks2017Context.OnConfiguring()");
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            System.Diagnostics.Debug.WriteLine("CS AdventureWorks2017Context.OnmodelConfiguring()");
            modelBuilder.Entity<Customers>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(100);

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.HasKey(e => e.Name);

                entity.Property(e => e.Name)
                    .HasMaxLength(10)
                    .ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(100);
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(100);

                entity.Property(e => e.Name).HasMaxLength(100);
            });
        }

        internal Customers Find(int id)
        {
            throw new NotImplementedException();
        }
    }
}
