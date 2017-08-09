package xyz.thedyps.project.springboot.mem;

@SuppressWarnings("serial")
public class AlreadyExistingMemberException extends RuntimeException {

	public AlreadyExistingMemberException(String message) {
		super(message);
	}

}
