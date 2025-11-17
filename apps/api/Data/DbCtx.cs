using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class DbCtx(DbContextOptions<DbCtx> options) : DbContext(options) { }
