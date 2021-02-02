package com.example.easynotes;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.bottomsheet.BottomSheetDialog;

public class Create extends AppCompatActivity implements ExampleBottomSheet.Bottomsheetlistener{

    private ImageButton openbuttonsheet;
    private Button submit;
    private TextView mtextview;
    int noteID, noteID2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create);

        EditText editText = (EditText) findViewById(R.id.titletext);
        Intent intent = getIntent();
        noteID = intent.getIntExtra("noteID", -1);
        if (noteID != -1) {
            editText.setText(Homescreen.notes.get(noteID));
        } else
        {
            Homescreen.notes.add("");
            noteID = Homescreen.notes.size() -1;
            Homescreen.arrayAdapter.notifyDataSetChanged();
        }
        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                Homescreen.notes.set(noteID, String.valueOf(s));
                Homescreen.arrayAdapter.notifyDataSetChanged();
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

        submit = findViewById(R.id.submit_button);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Create.this,Homescreen.class);
                startActivity(intent);
            }
        });



        mtextview = findViewById(R.id.titletext);

        openbuttonsheet = findViewById(R.id.openbutton);
        openbuttonsheet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ExampleBottomSheet bottom = new ExampleBottomSheet();
                bottom.show(getSupportFragmentManager(), "examplebottomsheet");
            }
        });
    }

    @Override
    public void onButtonClicked(String text) {
        mtextview.setText(text);
    }
}
                // nakalagay sa loob ng view c overide
                //ExampleBottomSheet bottom = new ExampleBottomSheet();
                //bottom.show(getSupportFragmentManager(), "examplebottomsheet");




    /*BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(Create.this,);
    View bottomSheetView = LayoutInflater.from(getApplicationContext())
            .inflate(R.layout.bottom_sheet,(LinearLayout)findViewById(R.id.linearLayoutid));
                bottomSheetView.findViewById(R.id.lowbutton).setOnClickListener(new View.OnClickListener() {
       @Override
        public void onClick(View v) {
        Intent intent = new Intent(Create.this,Homescreen.class);
        startActivity(intent);
        Toast.makeText(Create.this, "HATDOG", Toast.LENGTH_SHORT).show();
        }
        });
        bottomSheetDialog.setContentView(bottomSheetView);
        bottomSheetDialog.show();

        */