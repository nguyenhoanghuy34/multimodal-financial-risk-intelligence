# ☁️ Cloud Data Platform — AWS

> **Cloud-based data platform for financial, e-commerce, customer review, and ML model monitoring data.**

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazonaws)
![S3](https://img.shields.io/badge/Amazon%20S3-Data%20Lake-blue?logo=amazons3)
![RDS](https://img.shields.io/badge/Amazon%20RDS-Database-blue?logo=amazonrds)
![Redshift](https://img.shields.io/badge/Amazon%20Redshift-Data%20Warehouse-8C4FFF?logo=amazonredshift)
![Python](https://img.shields.io/badge/Python-Data%20Engineering-3776AB?logo=python)
![SQL](https://img.shields.io/badge/SQL-Analytics-4479A1?logo=postgresql)

## 🎯 Overview

A scalable AWS-based data platform designed to **store, organize, and monitor heterogeneous datasets** across multiple domains:

- 💰 **Financial Data** — market prices, transactions, financial indicators
- 🛒 **E-commerce Data** — products, orders, customers, sales
- ⭐ **Customer Reviews** — ratings, reviews, sentiment-related data
- 🤖 **ML Model Monitoring** — predictions, metrics, model performance, drift

## 🏗️ Architecture

                    Data Sources
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
      Financial      E-commerce      ML Models
          │              │              │
          └──────────────┼──────────────┘
                         ↓
                    Amazon S3
                    Data Lake
                         │
                ┌────────┴────────┐
                ↓                 ↓
               RDS            Processing
            PostgreSQL        / ETL / ELT
                                  │
                                  ↓
                             Redshift
                         Data Warehouse
                                  │
                    ┌─────────────┴─────────────┐
                    ↓                           ↓
                 Analytics                 Monitoring
