using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace iAPP001
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.BackColor = Color.FromArgb(34, 138, 230);
        }
        private string ObtenerCadena(string s, int r)
        {
            char[] testArray = s.ToCharArray();
            int repCount = 1;
            string result = "";
            char prevChar = '\0';
            foreach (char character in testArray)
            {
                if (character == prevChar)
                {
                    if (repCount < r)
                    {
                        result += character;
                        repCount++;
                    }

                }
                else
                {
                    repCount = 1;
                    result += character;
                }
                prevChar = character;


            }
            return result;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //if (Tb_String.Text.Contains(" "))
            {
                MessageBox.Show("Su cadena de texto NO debe contener espacios", "Advertencia!", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            else if (Tb_String.Text == "")
            {
                MessageBox.Show("Por favor complete el campo de la cadena", "Error!", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            else
            {
                TB_Result.Text = ObtenerCadena(Tb_String.Text, Convert.ToInt32(numericUpDown1.Value));
            }
        }
    }
}
