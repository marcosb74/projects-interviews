namespace iAPP001
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.numericUpDown1 = new System.Windows.Forms.NumericUpDown();
            this.lbl_cda = new System.Windows.Forms.Label();
            this.TB_Result = new System.Windows.Forms.TextBox();
            this.lbl_cadena = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.Tb_String = new System.Windows.Forms.TextBox();
            this.lbl_res = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).BeginInit();
            this.SuspendLayout();
            // 
            // numericUpDown1
            // 
            this.numericUpDown1.Location = new System.Drawing.Point(415, 89);
            this.numericUpDown1.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.numericUpDown1.Name = "numericUpDown1";
            this.numericUpDown1.ReadOnly = true;
            this.numericUpDown1.Size = new System.Drawing.Size(143, 20);
            this.numericUpDown1.TabIndex = 14;
            this.numericUpDown1.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            // 
            // lbl_cda
            // 
            this.lbl_cda.AutoSize = true;
            this.lbl_cda.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbl_cda.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.lbl_cda.Location = new System.Drawing.Point(200, 87);
            this.lbl_cda.Name = "lbl_cda";
            this.lbl_cda.Size = new System.Drawing.Size(194, 18);
            this.lbl_cda.TabIndex = 13;
            this.lbl_cda.Text = "Cantidad de repeticiones";
            // 
            // TB_Result
            // 
            this.TB_Result.Location = new System.Drawing.Point(119, 197);
            this.TB_Result.Name = "TB_Result";
            this.TB_Result.ReadOnly = true;
            this.TB_Result.Size = new System.Drawing.Size(439, 20);
            this.TB_Result.TabIndex = 12;
            // 
            // lbl_cadena
            // 
            this.lbl_cadena.AutoSize = true;
            this.lbl_cadena.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbl_cadena.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.lbl_cadena.Location = new System.Drawing.Point(200, 33);
            this.lbl_cadena.Name = "lbl_cadena";
            this.lbl_cadena.Size = new System.Drawing.Size(65, 18);
            this.lbl_cadena.TabIndex = 11;
            this.lbl_cadena.Text = "Cadena";
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.button1.Location = new System.Drawing.Point(203, 134);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(355, 32);
            this.button1.TabIndex = 10;
            this.button1.Text = "Ejecutar";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Tb_String
            // 
            this.Tb_String.Location = new System.Drawing.Point(300, 34);
            this.Tb_String.Name = "Tb_String";
            this.Tb_String.Size = new System.Drawing.Size(258, 20);
            this.Tb_String.TabIndex = 9;
            // 
            // lbl_res
            // 
            this.lbl_res.AutoSize = true;
            this.lbl_res.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbl_res.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.lbl_res.Location = new System.Drawing.Point(29, 199);
            this.lbl_res.Name = "lbl_res";
            this.lbl_res.Size = new System.Drawing.Size(84, 18);
            this.lbl_res.TabIndex = 15;
            this.lbl_res.Text = "Resultado";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 72F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.SystemColors.ButtonFace;
            this.label1.Location = new System.Drawing.Point(12, 47);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(169, 108);
            this.label1.TabIndex = 16;
            this.label1.Text = "C#";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Highlight;
            this.ClientSize = new System.Drawing.Size(608, 248);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.lbl_res);
            this.Controls.Add(this.numericUpDown1);
            this.Controls.Add(this.lbl_cda);
            this.Controls.Add(this.TB_Result);
            this.Controls.Add(this.lbl_cadena);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.Tb_String);
            this.Name = "Form1";
            this.Text = "C# Interview App 01";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.NumericUpDown numericUpDown1;
        private System.Windows.Forms.Label lbl_cda;
        private System.Windows.Forms.TextBox TB_Result;
        private System.Windows.Forms.Label lbl_cadena;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox Tb_String;
        private System.Windows.Forms.Label lbl_res;
        private System.Windows.Forms.Label label1;
    }
}

