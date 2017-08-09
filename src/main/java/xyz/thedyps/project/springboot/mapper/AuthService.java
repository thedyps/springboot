package xyz.thedyps.project.springboot.mapper;

import xyz.thedyps.project.springboot.mem.AuthInfo;

public interface AuthService {
	AuthInfo authenticate(String email, String password);
}
