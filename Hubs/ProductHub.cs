using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs
{
    public class ProductHub:Hub
    {
        public static int AvailableQuantity = 1;
        public async Task PurchaseProduct()
        {
            if (AvailableQuantity>0)
            {
                AvailableQuantity--;
                await Clients.Caller.SendAsync("ProductSuccess", "Pruchase Order success");
                if(AvailableQuantity==0)
                {
                    await Clients.Others.SendAsync("ProductSoldOut", "Sorry no More product");
                }

            }
            else
            {
                await Clients.Caller.SendAsync("PurchaseFailed", "Sorry no More product");
            }
        }
    }
}

