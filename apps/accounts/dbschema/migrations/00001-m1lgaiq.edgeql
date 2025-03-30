CREATE MIGRATION m1lgaiqsjhxwxc2khxujmluhxvmpsm7vhusohr67tzg5diyprf7c7q
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY email: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY password: std::str;
  };
};
