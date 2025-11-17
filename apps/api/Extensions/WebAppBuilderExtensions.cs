using Api.Data;
using Api.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions;

public static class WebAppBuilderExtensions {
  public static IServiceCollection AddApiDocs(this IServiceCollection services, IConfiguration config) {
    var version = config.GetValue<int>("AppConfig:Version");

    services
      .AddOpenApi(o => o
        .AddDocumentTransformer((doc, ctx, _) => {
          doc.Info.Version = version.ToString();
          doc.Info.Title = "B85 API";

          return Task.CompletedTask;
        })
      );

    return services;
  }

  public static IServiceCollection AddCorsForDev(this IServiceCollection services) {
    services.AddCors(o => {
      o.AddPolicy("DevCorsPolicy", policy => {
        policy
          .WithOrigins(
            "http://localhost:5184",
            "http://127.0.0.1:5184"
          )
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowCredentials();
      });
    });

    return services;
  }

  public static IServiceCollection AddDatabases(this IServiceCollection services, IConfiguration config) {
    var defaultDbConnStr = config.GetConnectionString("DefaultDb")
                        ?? throw new ArgumentException("Missing connection string: 'DefaultDb'.");

    var serverVersion = ServerVersion.AutoDetect(defaultDbConnStr);

    services.AddDbContext<DbCtx>(o => o.UseMySql(defaultDbConnStr, serverVersion));

    return services;
  }

  public static IServiceCollection AddAppServices(this IServiceCollection services) {
    // Add scoped services here...

    return services;
  }

  public static IServiceCollection AddGlobalExceptionHandler(this IServiceCollection services) {
    services.AddExceptionHandler<GlobalExceptionHandler>();
    services.AddProblemDetails();

    return services;
  }
}
