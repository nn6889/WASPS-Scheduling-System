<?php

class User
{
    private $id;
    private $firstName;
    private $lastName;
    private $role;
    private $phone;
    private $email;
    private $registered;
    private $lastLogin;
    private $wantsSMS;
    private $wantsEmail;

    public function getUserInfo()
    {
        return [
            "id" => $this->id,
            "firstName" => $this->firstName,
            "lastName" => $this->lastName,
            "role" => $this->role,
            "phone" => $this->phone,
            "email" => $this->email,
            "registered" => $this->registered,
            "lastLogin" => $this->lastLogin,
            "wantsSMS" => $this->wantsSMS,
            "wantsEmail" => $this->wantsEmail
        ];
    }

    public function getDriverContactInfo()
    {
      return [
         "id" => $this->id,
         "firstName" => $this->firstName,
         "lastName" => $this->lastName,
         "phone" => $this->phone,
         "email" => $this->email
      ];
    }
}
