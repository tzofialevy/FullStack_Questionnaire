using System;
using System.Collections;
using System.Collections.Generic;

namespace ConsoleApp2
{
    class Program {
       
        public static void prints_names_it_and_all(Inode obj)
        {
            Queue<string> q = new Queue<string>();
            q.Enqueue(obj.name);
            while (q.Count != 0)
            {
                string name1 = q.Dequeue();
                Console.WriteLine(name1);
                for (int i = 0; i < obj.children.Length; i++)
                {
                    q.Enqueue(obj.children[i].name);
                }
            }

        }

        static void Main(string[] args)
        {
            
            
        }
    }
}

