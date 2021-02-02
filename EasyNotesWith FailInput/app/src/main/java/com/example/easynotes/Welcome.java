package com.example.easynotes;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;

public class Welcome extends AppCompatActivity {

    private EditText nickname;
    private ImageButton add;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);
        nickname = findViewById(R.id.text_nickname);
        add = findViewById(R.id.button_add);

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String nickname1 = nickname.getText().toString();

                Intent intent = new Intent(Welcome.this,Homescreen.class);
                intent.putExtra ("keyname",nickname1);
                startActivity(intent);
            }
        });

    }
}