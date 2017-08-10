package xyz.thedyps.project.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.ui.Model;
import xyz.thedyps.project.springboot.service.PcDetailService;

@Controller
public class PcDetailController {
	@Autowired
	private PcDetailService service;

	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String pcDetail(Model model) {
		
		model.addAttribute("pcSummary", service.getPcSummary("PC-X001"));
		model.addAttribute("pcDetail", service.getPcDetail("PC-X001"));
		model.addAttribute("pcImg", service.getPcImg("PC-X001"));
		return "pcDetail";
	}
}
