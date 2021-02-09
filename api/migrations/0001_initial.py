# Generated by Django 3.1.6 on 2021-02-08 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name='username')),
                ('password', models.CharField(max_length=50, verbose_name='password')),
                ('created_at', models.DateTimeField(verbose_name='created_at')),
                ('first_name', models.CharField(max_length=50, verbose_name='first_name')),
                ('last_name', models.CharField(max_length=50, verbose_name='last_name')),
                ('dob', models.DateField(verbose_name='dob')),
                ('staff', models.BooleanField(default=True, verbose_name='staff')),
                ('manager', models.BooleanField(default=False, verbose_name='manager')),
                ('admin', models.BooleanField(default=False, verbose_name='admin')),
            ],
        ),
    ]