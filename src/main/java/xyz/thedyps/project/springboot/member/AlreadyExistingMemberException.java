package xyz.thedyps.project.springboot.member;

@SuppressWarnings("serial")
public class AlreadyExistingMemberException extends RuntimeException {

	public AlreadyExistingMemberException(String message) {
		super(message);
	}

}
