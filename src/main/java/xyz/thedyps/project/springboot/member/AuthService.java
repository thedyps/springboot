package xyz.thedyps.project.springboot.member;

import xyz.thedyps.project.springboot.member.AuthInfo;

public interface AuthService {
	AuthInfo authenticate(String email, String password);
}
