public class test
{
    public static void main(String[] args)
    {
        System.out.println("Hello World");
    }

    //write function to take input n and print all prime numbers from 1 to n
    public static void printPrime(int n)
    {
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=i;j++)
            {
                if(i%j==0)
                {
                    System.out.print(j+" ");
                }
            }
            System.out.println();
        }
    }
    //write function to check if a number is prime or not
    public static boolean isPrime(int n)
    {
        if(n==1)
        {
            return false;
        }
        for(int i=2;i<=n/2;i++)
        {
            if(n%i==0)
                           {
                return false;
            }
        }
        return true;
    }
    

}