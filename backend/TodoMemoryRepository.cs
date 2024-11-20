namespace backend;

public class TodoMemoryRepository
{
    private readonly List<Todo> _todos = new();
    private int _nextId = 1;

    public IEnumerable<Todo> GetAll() => _todos;

    public Todo GetById(int id) => _todos.FirstOrDefault(t => t.Id == id);

    public void Add(Todo todo)
    {
        todo.Id = _nextId++;
        _todos.Add(todo);
    }

    public void Update(Todo updatedTodo)
    {
        var todo = GetById(updatedTodo.Id);
        if (todo == null) return;

        todo.Title = updatedTodo.Title;
        todo.IsCompleted = updatedTodo.IsCompleted;
    }

    public void Remove(int id) => _todos.RemoveAll(t => t.Id == id);
}
