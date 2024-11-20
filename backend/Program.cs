using backend;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000") // Change this to your frontend's URL
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

var repository = new TodoMemoryRepository();

app.UseCors("AllowFrontend");

app.MapGet("/todos", () => 
{
    var todos = repository.GetAll();
    return Results.Ok(todos.Any() ? todos : new List<Todo>());
});

app.MapGet("/todos/{id}", (int id) => 
{
    var todo = repository.GetById(id);
    return todo is not null ? Results.Ok(todo) : Results.NotFound();
});

app.MapPost("/todos", (Todo todo) => 
{
    repository.Add(todo);
    return Results.Created($"/todos/{todo.Id}", todo);
});

app.MapPut("/todos/{id}", (int id, Todo updatedTodo) => 
{
    var todo = repository.GetById(id);
    if (todo is null) return Results.NotFound();

    updatedTodo.Id = id;
    repository.Update(updatedTodo);
    return Results.NoContent();
});

app.MapDelete("/todos/{id}", (int id) => 
{
    repository.Remove(id);
    return Results.NoContent();
});

app.Run();