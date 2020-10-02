import java.util.Scanner;

public class Subcadena {

    public static String reverse(String a) {
        int j = a.length();
        char[] newWord = new char[j];
        for (int i = 0; i < a.length(); i++) {
            newWord[--j] = a.charAt(i);
        }
        return new String(newWord);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String cadena, subcadena;
        while(true){
            System.out.print("Ingresa una cadena: ");
            cadena = sc.nextLine();
            subcadena = reverse(cadena.substring(14,25));
            System.out.println(subcadena.toLowerCase());
        }
    }
}