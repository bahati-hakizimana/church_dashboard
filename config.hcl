# config.hcl app configuration file generated for legalwise on Thursday, 30-May-24 02:31:29 PDT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "legalwise"

app {

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "legalwise"
  }

}
