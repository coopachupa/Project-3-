-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/1Zv5BC
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Country" (
    "Country_ID" int   NOT NULL,
    "Country_Name" varchar(50)   NOT NULL,
    CONSTRAINT "pk_Country" PRIMARY KEY (
        "Country_ID"
     )
);

CREATE TABLE "Import-Export" (
    "Trade_ID" int   NOT NULL,
    "Country_ID" int   NOT NULL,
    "Year" int   NOT NULL,
    "Exports" float   NOT NULL,
    "Imports" float   NOT NULL,
    "Domestic_Consumption" float   NOT NULL,
    CONSTRAINT "pk_Import-Export" PRIMARY KEY (
        "Trade_ID"
     )
);

CREATE TABLE "Population" (
    "Population_ID" int   NOT NULL,
    "Country_ID" int   NOT NULL,
    "Population_2023" int   NOT NULL,
    CONSTRAINT "pk_Population" PRIMARY KEY (
        "Population_ID"
     )
);

CREATE TABLE "Quality" (
    "QualityMetrics_ID" int   NOT NULL,
    "Country_ID" int   NOT NULL,
    "Aroma_Score" float   NOT NULL,
    "Flavor_Score" float   NOT NULL,
    "Aftertaste_Score" float   NOT NULL,
    "Acidity_Score" float   NOT NULL,
    "Body_Score" float   NOT NULL,
    "Balance_Score" float   NOT NULL,
    "Sweetness_Score" float   NOT NULL,
    "Moisture_Score" float   NOT NULL,
    "Mean_Overall" float   NOT NULL,
    CONSTRAINT "pk_Quality" PRIMARY KEY (
        "QualityMetrics_ID"
     )
);

CREATE TABLE "Consumption" (
    "Consumption_ID" int   NOT NULL,
    "Country_ID" int   NOT NULL,
    "Population" int   NOT NULL,
    "Consumption_Per_Person" float   NOT NULL,
    "Consumption_Per_Person_LBS" float   NOT NULL,
    CONSTRAINT "pk_Consumption" PRIMARY KEY (
        "Consumption_ID"
     )
);

ALTER TABLE "Import-Export" ADD CONSTRAINT "fk_Import-Export_Country_ID" FOREIGN KEY("Country_ID")
REFERENCES "Country" ("Country_ID");

ALTER TABLE "Population" ADD CONSTRAINT "fk_Population_Country_ID" FOREIGN KEY("Country_ID")
REFERENCES "Country" ("Country_ID");

ALTER TABLE "Quality" ADD CONSTRAINT "fk_Quality_Country_ID" FOREIGN KEY("Country_ID")
REFERENCES "Country" ("Country_ID");

ALTER TABLE "Consumption" ADD CONSTRAINT "fk_Consumption_Country_ID" FOREIGN KEY("Country_ID")
REFERENCES "Country" ("Country_ID");

