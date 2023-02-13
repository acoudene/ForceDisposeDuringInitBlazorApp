namespace ForceDisposeDuringInitBlazorApp.Client.Services
{
  public class NotificationService
  {
    public event EventHandler? NotifiedEvent;    

    public async Task NotifyAsync()
    {
      NotifiedEvent?.Invoke(this, new EventArgs());
      await Task.CompletedTask;
    }
  }
}
