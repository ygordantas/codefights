using System;

class MainClass {
  public static void Main (string[] args) {

    Console.WriteLine(minChange(101));

    
  }

  static int minChange(int coins)
  {
    int[] c = new int[5] {50,25,10,5,1};
    int minNumberCoins = 0;
    if (coins < 1) {
      return 0;
    }
      foreach(int coin in c)
      {
        minNumberCoins += coins / coin; 
        coins %= coin; 
      }
      return minNumberCoins;
  }
}
