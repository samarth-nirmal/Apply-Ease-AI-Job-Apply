using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaukriScraperApi.Model
{
    public class UserProfile
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public decimal TotalExperience { get; set; }
        public string CurrentJobTitle { get; set; } = string.Empty;
        public string CurrentCompany { get; set; } = string.Empty;
        public string Industry { get; set; } = string.Empty;
        public string PrimarySkills { get; set; } = string.Empty;
        public string SecondarySkills { get; set; } = string.Empty;
        public string Certifications { get; set; } = string.Empty;
        public string HighestQualification { get; set; } = string.Empty;
        public string Specialization { get; set; } = string.Empty;
        public int GraduationYear { get; set; }
        public string GitHubUrl { get; set; } = string.Empty;
        public string LinkedInUrl { get; set; } = string.Empty;
        public string PreferredJobRole { get; set; } = string.Empty;
        public string Projects { get; set; } = string.Empty;
        public string PreferredLocation { get; set; } = string.Empty;
        public string noticePeriod { get; set; } = string.Empty;
        public int CurrentSalary { get; set; }
        public int ExpectedSalary { get; set; }
        public string willingToRelocate { get; set; } = string.Empty;
        public string UserProfileSummary { get; set; } = string.Empty;
        public float? XPercentage { get; set; }
        public float? XIIPercentage { get; set; }

        [Column(TypeName = "date")]
        public DateTime? BirthDate { get; set; }

        public int UserId { get; set; }

        public User? User { get; set; }
    }
}
