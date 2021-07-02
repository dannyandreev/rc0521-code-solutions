select  "customers"."firstName",
        "customers"."lastName",
        "customers"."customerId",
        "payments"."amount"
  from  "customers",
        "payments"
  where "customers"."customerId" = "payments"."customerId"
  order by "payments"."amount" DESC
  limit 10
